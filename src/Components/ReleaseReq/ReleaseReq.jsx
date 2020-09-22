import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { sizing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Link from "@material-ui/core/Link";
import GetAppIcon from "@material-ui/icons/GetApp";
import { yellow500 } from "@material-ui/core/colors/yellow";
import FilterListIcon from "@material-ui/icons/FilterList";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F6EC5A",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#084791",
    },
  },
});
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const useStyles1 = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ffffff",
    color: theme.palette.common.white,
  },
}))(TableCell);

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

function createData(
  RefNo,
  Manager,
  ResourceName,
  EmployeeID,
  EmployeeTitle,
  Function,
  ReleaseDate,
  ReleasePercentage,
  ReleaseReason,
  Leaving,
  Status,
  ActionTaken,
  Actions
) {
  return {
    RefNo,
    Manager,
    ResourceName,
    EmployeeID,
    EmployeeTitle,
    Function,
    ReleaseDate,
    ReleasePercentage,
    ReleaseReason,
    Leaving,
    Status,
    ActionTaken,
    Actions,
  };
}
const rows = [
  createData(
    1,
    "Frozen yoghurt",
    "Frozen yoghurt",
    "Frozen yoghurt",
    3453535,
    334534455,
    35,
    "Frozen yoghurt",
    "Frozen yoghurt",
    535,
    "dscdc",
    "dxexec",
    2334334
  ),
];
export default function Resource() {
  const classes = useStyles();
  const classes1 = useStyles1();

  return (
    <MuiThemeProvider theme={themeDark}>
      <Box mt={2} height={200} style={{ backgroundColor: "#AC2225" }}>
        <Box pt={15} ml={2}>
          <WhiteTextTypography variant="h3">
            Release requests
          </WhiteTextTypography>
        </Box>
      </Box>

      <Box width="90%" mt={20} mx="auto">
        <TableContainer component={Paper}>
          <div class="tableIcons">
            <div className={classes1.root}>
              <ThemeProvider theme={theme}>
                <Link href="#">
                  <Fab aria-label="add">
                    <AddIcon />
                  </Fab>
                </Link>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Link href="#">
                  <Fab color="secondary" aria-label="edit">
                    <GetAppIcon />
                  </Fab>
                </Link>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <Fab color="primary" aria-label="edit">
                    <FilterListIcon />
                  </Fab>
                </button>
              </ThemeProvider>
            </div>
          </div>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Ref No.</StyledTableCell>
                <StyledTableCell align="center">Manager</StyledTableCell>
                <StyledTableCell align="center">Resource Name</StyledTableCell>
                <StyledTableCell align="center">Employee ID</StyledTableCell>
                <StyledTableCell align="center">Employee Title</StyledTableCell>
                <StyledTableCell align="center">Function</StyledTableCell>
                <StyledTableCell align="center">Release Date</StyledTableCell>
                <StyledTableCell align="center">
                  Release Percentage
                </StyledTableCell>
                <StyledTableCell align="center">Release Reason</StyledTableCell>
                <StyledTableCell align="center">Leaving</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Actions taken</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.RefNo}>
                  <TableCell
                    align="center"
                    style={{ color: "black" }}
                    component="th"
                    scope="row"
                  >
                    {row.RefNo}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.Manager}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.ResourceName}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.EmployeeID}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.EmployeeTitle}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.Function}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.ReleaseDate}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.ReleasePercentage}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.ReleaseReason}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.Leaving}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.Status}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.ActionTaken}
                  </TableCell>
                  <TableCell style={{ color: "black" }} align="center">
                    {row.Actions}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}