/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from "next";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Container from "../components/container";
import TopNavBar from "../components/top-nev-bar";
import Tag from "../components/tag";

const Dashboard: NextPage = () => {
  function createData(
    sl: string,
    trxType: string,
    amount: string,
    trxNumber: string,
    trxId: string,
    gateway: string,
    coin: number,
    status: string,
    date: string
  ) {
    return {
      sl,
      trxType,
      amount,
      trxNumber,
      trxId,
      gateway,
      coin,
      status,
      date,
    };
  }
  const rows = [
    createData(
      "#1",
      "Deposit",
      "$200",
      "123456789",
      "BL123456789",
      "Bkash",
      100,
      "Approved",
      "22/04/2022"
    ),
    createData(
      "#2",
      "Withdraw",
      "$200",
      "123456789",
      "BL123456789",
      "Bank",
      200,
      "Rejected",
      "23/04/2022"
    ),
    createData(
      "#3",
      "Withdraw",
      "$200",
      "123456789",
      "BL123456789",
      "Nagad",
      200,
      "Approved",
      "13/04/2022"
    ),
    createData(
      "#4",
      "Deposit",
      "$200",
      "123456789",
      "BL123456789",
      "Rocket",
      300,
      "Rejected",
      "30/04/2022"
    ),
    createData(
      "#5",
      "Deposit",
      "$200",
      "123456789",
      "BL123456789",
      "Agent",
      300,
      "Rejected",
      "02/04/2022"
    ),
  ];

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#C3CDFF",
      color: "#6F6C8F",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  const getStatusColor = (status: string): string => {
    if (status === "Approved") return "#03A600";
    return "#FF0000";
  };

  const getGateWayColor = (gatWay: string) => {
    if (gatWay === "Bkash") return "#E3106E";
    if (gatWay === "Bank") return "#0044C9";
    if (gatWay === "Nagad") return "#FE7A00";
    if (gatWay === "Rocket") return "#8A288F";
    return "#3300FE";
  };

  return (
    <div css={dashBoardCss}>
      <TopNavBar />
      <Container>
        <div className="title-search">
          <div className="title">Finanace</div>
          <div className="search-bar">
            <Paper
              component="form"
              sx={{
                p: "1px 3px",
                display: "flex",
                alignItems: "center",
                borderRadius: 1,
                backgroundColor: "#F1F3FF",
                width: 500,
              }}
            >
              <p className="drop-down">All</p>
              <IconButton type="submit" aria-label="search">
                <ArrowDropDownIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search by Trx ID/Number"
                inputProps={{ "aria-label": "Search by Trx ID/Number" }}
              />
              {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
              <IconButton
                style={{ backgroundColor: "#302a78" }}
                type="submit"
                aria-label="search"
              >
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            </Paper>
          </div>
        </div>
        <div className="tab-items">
          <div className="item-active">Wallet</div>
          <div className="item">Deposit</div>
          <div className="item">Withdraw</div>
          <div className="item">Transfer</div>
          <div className="item">1X Transfer</div>
          <div className="last-item">Transaction</div>
        </div>
        <div className="main-container">
          <div className="card-items">
            <div className="first-item">
              <img src="./card-background-1.png" alt="project logo" />
            </div>
            <div className="first-item">
              <img src="./card-background-1.png" alt="project logo" />
            </div>
            <div className="first-item">
              <img src="./card-background-1.png" alt="project logo" />
            </div>
            <div className="first-item">
              <img src="./card-background-1.png" alt="project logo" />
            </div>
          </div>

          <div className="table-wrapper">
            <div className="table-title">Last Transactions</div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <caption style={{ backgroundColor: "#C3CDFF" }} />
                <TableHead>
                  <TableRow>
                    <StyledTableCell>SL</StyledTableCell>
                    <StyledTableCell align="center">Trx Type</StyledTableCell>
                    <StyledTableCell align="center">Amount</StyledTableCell>
                    <StyledTableCell align="center">Trx Number</StyledTableCell>
                    <StyledTableCell align="center">Trx ID</StyledTableCell>
                    <StyledTableCell align="center">Gateway</StyledTableCell>
                    <StyledTableCell align="center">Coin</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">Date</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.sl}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {" "}
                        {row.sl}
                      </TableCell>
                      <TableCell align="center">{row.trxType}</TableCell>
                      <TableCell align="center">{row.amount}</TableCell>
                      <TableCell align="center">{row.trxNumber}</TableCell>
                      <TableCell align="center">{row.trxId}</TableCell>
                      <TableCell align="center">
                        <Tag
                          text={row.gateway}
                          tagColor={getGateWayColor(row.gateway)}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Tag text={row.coin} tagColor="#E97E00" />
                      </TableCell>
                      <TableCell align="center">
                        <Tag
                          text={row.status}
                          tagColor={getStatusColor(row.status)}
                        />
                      </TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Container>
    </div>
  );
};

const dashBoardCss = css`
  margin-bottom: 20px;
  .title-search {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    .title {
      color: #302a78;
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 100%;
      margin-top: 10px;
    }
    .search-bar {
      .drop-down {
        margin-left: 20px;
        margin-right: 20px;
        color: #6f6c8f;
      }
    }
  }
  .tab-items {
    display: flex;
    justify-content: space-between;
    .item-active {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      color: #ffcc00;
      padding: 10px 70px 10px 70px;
      background-color: #302a78;
      border-radius: 3px 3px 0px 0px;
      margin-right: 2px;
    }
    .item {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      color: #302a78;
      padding: 10px 70px 10px 70px;
      background-color: #c3cdff;
      border-radius: 3px 3px 0px 0px;
      margin-right: 2px;
    }
    .last-item-active {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      color: #ffcc00;
      padding: 10px 70px 10px 70px;
      background-color: #302a78;
      border-radius: 3px 3px 0px 0px;
    }
    .last-item {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      color: #302a78;
      padding: 10px 70px 10px 70px;
      background-color: #c3cdff;
      border-radius: 3px 3px 0px 0px;
    }
  }
  .main-container {
    height: auto;
    width: 100%;
    border: 1px solid #c3cdff;
    border-radius: 0px 0px 10px 10px;
    .card-items {
      margin: 2%;
      display: flex;
      justify-content: space-between;
      .first-item {
      }
    }
    .table-wrapper {
      .table-title {
        margin-bottom: 20px;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 27px;
        color: #352f7f;
      }
      margin: 2%;
      border-radius: 100px;
    }
  }
`;

export default Dashboard;
