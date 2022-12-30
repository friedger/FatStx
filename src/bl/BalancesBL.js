//Primary function called by the front end
export default async function convertJsonToBalanceArray(json, walletId) {
  let outputArray = [
    {
      name: "Stacks",
      sent: json.stx.total_sent,
      received: json.stx.total_received,
      balance: json.stx.balance,
      fees: json.stx.total_fees_sent,
      type: "stx",
    },
  ];
  for (const id of Object.keys(json.fungible_tokens)) {
    const [contract, assetName] = id.split("::");
    const [contractAddress, contractName] = contract.split(".");
    outputArray.push({
      name: contractName,
      sent: json.fungible_tokens[id].total_sent,
      received: json.fungible_tokens[id].total_received,
      balance: json.fungible_tokens[id].balance,
      type: "ft"
    });
  }
  for (const id of Object.keys(json.non_fungible_tokens)) {
    const [contract, assetName] = id.split("::");
    const [contractAddress, contractName] = contract.split(".");
    outputArray.push({
      name: contractName,
      sent: json.non_fungible_tokens[id].total_sent,
      received: json.non_fungible_tokens[id].total_received,
      balance: json.non_fungible_tokens[id].count,
      type: "nft"
    });
  }
  return outputArray;
}
