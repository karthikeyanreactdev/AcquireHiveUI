import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from "@material-ui/core";
import EmailIcon from "@mui/icons-material/Email";

const Candidate = ({ candidateList }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "John",
      mobile: "active",
      email: "test@gmail.com",
      score: "9.5",
      status: "selected",
    },
    {
      id: 2,
      name: "Jane",
      mobile: "active",
      email: "Jane@gmail.com",
      score: "9.5",
      status: "selected",
    },
    {
      id: 3,
      name: "Bob",
      mobile: "active",
      email: "Bob@gmail.com",
      score: "9.5",
      status: "selected",
    },
    {
      id: 4,
      name: "Alice",
      mobile: "active",
      email: "Alice@gmail.com",
      score: "9.5",
      status: "rejected",
    },
    {
      id: 5,
      name: "Tom",
      mobile: "active",
      email: "Tom@gmail.com",
      score: "9.5",
      status: "selected",
    },
    {
      id: 6,
      name: "Jerry",
      mobile: "active",
      email: "Jerry@gmail.com",
      score: "9.5",
      status: "selected",
    },
    {
      id: 7,
      name: "Mike",
      mobile: "active",
      email: "Mike@gmail.com",
      score: "9.5",
      status: "selected",
    },
    {
      id: 8,
      name: "Sara",
      mobile: "active",
      email: "Sara@gmail.com",
      score: "9.5",
      status: "rejected",
    },
    {
      id: 9,
      name: "Emily",
      mobile: "active",
      email: "Emily@gmail.com",
      score: "9.5",
      status: "selected",
    },
    {
      id: 10,
      name: "David",
      mobile: "active",
      email: "David@gmail.com",
      score: "9.5",
      status: "selected",
    },
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleStatusChange = (event, index) => {
    const newRows = [...rows];
    newRows[index].status = event.target.value;
    setRows(newRows);
  };

  const handleSendEmail = (i) => {
    console.log("rows[i].status", rows[i]);
  };

  return (
    <>
      <Box mt={2}>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Relevant Experience</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Skills</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Total Experience</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {candidateList.map((row, i) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.full_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.mobile}</TableCell>
                    <TableCell>{row.relavant_experiance}</TableCell>
                    <TableCell>{row.score}</TableCell>
                    <TableCell>
                      {/* {JSON.parse(row.skills)} */}
                      {row.skills
                        .replace(/\{/g, "")
                        .replace(/}/g, "")
                        .replace(/"/g, "")}
                    </TableCell>
                    <TableCell>
                      {" "}
                      <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">
                          Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={row.status}
                          label="Status"
                          onChange={(e) => handleStatusChange(e, i)}
                          disabled={row.status === "enrolled"}
                        >
                          <MenuItem value={"enrolled"}>Enrolled</MenuItem>
                          <MenuItem value={"rejected"}>Rejected</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>{row.total_experiance}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        component="label"
                        onClick={() => handleSendEmail(i)}
                      >
                        <EmailIcon />
                      </IconButton>
                      {/* <EmailIcon /> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};

export default Candidate;
