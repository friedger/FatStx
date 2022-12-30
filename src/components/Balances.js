import {
  Grid,
  Box,
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Stack,
  Typography,
} from "@mui/material";
import Title from "./Title";

export default function Balances({ balanceData, walletId }) {
  const handleExport = () => {};

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <Title>Balances</Title>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" onClick={handleExport}>
              {" "}
              Export{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Table size="small">
        <colgroup>
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>

        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">IN</TableCell>
            <TableCell align="right">OUT</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {balanceData.map((row) => (
            <TableRow key={row.rowId}>
              <TableCell>
                <Stack>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    {row.name}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">{row.sent}</TableCell>
              <TableCell align="right">{row.received}</TableCell>
              <TableCell align="right">{row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
