import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';


export default function Transactions({txnData}) {

  console.log(txnData)

  const wordifyTransaction = (row) => {

    var transactionInWords = ''

    if ( row.outAmount > 0 ) {
      transactionInWords += row.outAmount + ' ' + row.outSymbol + ' OUT'
    }

    if ( row.inAmount > 0 ) {
      transactionInWords += transactionInWords.length != 0? ', ' : ''
      transactionInWords += row.inAmount + ' ' + row.inSymbol + ' IN'
    }

    return transactionInWords
  };

  return (
    <React.Fragment>
      <Title>Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Transaction</TableCell>
            <TableCell>TxID</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {txnData.map((row) => (
            <TableRow key={row.rowId}>
              <TableCell>{row.burnDate}</TableCell>
              <TableCell>{wordifyTransaction(row)}</TableCell>
              <TableCell>
                <a 
                  href = {"https://explorer.stacks.co/txid/" + row.xactnId + "?chain=mainnet"}
                >
                  {row.xactnId.substring(0, 4) + '...' + row.xactnId.slice(-6) }
                </a>
              </TableCell>
              <TableCell align="right">{`$${row.inCoinPrice + '//' + row.outCoinPrice}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" sx={{ mt: 3 }}>
        Export to CSV
      </Link>
    </React.Fragment>
  );
}
