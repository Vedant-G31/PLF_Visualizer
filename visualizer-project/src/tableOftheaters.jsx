import * as React from 'react';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';

import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import canadaTheaters from './theaters/canada.json'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#032651ff",
    color: theme.palette.common.white,
    fontSize: 11,
    [theme.breakpoints.up("xs")]: { fontSize: "0.35rem" },
    [theme.breakpoints.up("sm")]: { fontSize: "0.6rem" },
    [theme.breakpoints.up("md")]: { fontSize: "0.8rem" },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    backgroundColor: "transparent",
    color: "#ffffffff",
    [theme.breakpoints.up("xs")]: { fontSize: "0.35rem" },
    [theme.breakpoints.up("sm")]: { fontSize: "0.6rem" },
    [theme.breakpoints.up("md")]: { fontSize: "0.8rem" },

  },
}));

const StyledTableRow = styled(TableRow)(({ theme, selected }) => ({
     
    '&:hover': {
        backgroundColor: '#0d6dfdff !important',
        fontWeight: 500
    },
    ...(selected && {backgroundColor: "#0d6dfdff !important",})
}));
function TableofTheaters({onTheaterHeight, onTheaterWidth, onTheaterName, theaterSelected, onAspectRatio}) {
    return(
        <div>
            <TableContainer component={Paper} sx={{background: "linear-gradient(to right, #0d47a1, #0d47a1)", maxHeight: { xs: 800, md: "none" }}}>
                <Table size="small" aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Province</StyledTableCell>
                            <StyledTableCell>Location Name</StyledTableCell>
                            <StyledTableCell align="right">City</StyledTableCell>
                            <StyledTableCell align="right">Width</StyledTableCell>
                            <StyledTableCell align="right">Height</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {canadaTheaters.map((row) => (
                        <StyledTableRow
                            hover
                            key={row.Location_Name}
                            onClick={()=>{onTheaterHeight(row.Height); onTheaterWidth(row.Width); onTheaterName(row.Location_Name); onAspectRatio(row.Aspect_Ratio)}}
                            selected={theaterSelected === row.Location_Name}
                        >
                            <StyledTableCell component="th" scope="row">
                                {row.Province}
                            </StyledTableCell>
                            <StyledTableCell>{row.Location_Name}</StyledTableCell>
                            <StyledTableCell align="right">{row.City}</StyledTableCell>
                            <StyledTableCell align="right">{row.Width}</StyledTableCell>
                            <StyledTableCell align="right">{row.Height}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )


}

export default TableofTheaters;
