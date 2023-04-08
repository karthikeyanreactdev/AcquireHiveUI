import { Box, Chip } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // TablePagination,
  Paper,
} from "@material-ui/core";

const JobListTable = ({ jobList }) => {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <>
      <Box mt={2}>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Experience</TableCell>
                  <TableCell>Job Description</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Salary</TableCell>
                  <TableCell>Skills</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jobList &&
                  jobList.map((row, i) => (
                    <TableRow key={row.i}>
                      <TableCell>{row.company_name}</TableCell>
                      <TableCell>{row.experience}</TableCell>
                      <TableCell>
                        {row.job_description.length > 20
                          ? `${row.job_description.substring(0, 20)}…`
                          : row.job_description}
                      </TableCell>
                      <TableCell>{row.location}</TableCell>
                      <TableCell>{row.position}</TableCell>
                      <TableCell>{row.salary}</TableCell>
                      <TableCell>{row.skills}</TableCell>
                      <TableCell>
                        {row.is_active ? (
                          <>
                            <Chip label="Active" color="primary" />
                          </>
                        ) : (
                          <>
                            <Chip label="Inactive" color="warning" />
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>
      </Box>
    </>
  );
};

export default JobListTable;
