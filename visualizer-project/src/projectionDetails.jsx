import * as React from 'react';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';

import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow, { tableRowClasses } from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import canadaTheaters from './theaters/canada.json'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#032651ff",
    color: theme.palette.common.white,
    fontSize: 11

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    backgroundColor: "transparent",
    color: "#ffffffff"
  },
  borderBottom: "none"
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
     
    // '&:hover': {
    //     backgroundColor: '#24b3f0ff !important',
    //     fontWeight: 500
    // },

}));


function TableofProjDetails({theaterSelected}) {
    const selectedTheater = canadaTheaters.filter((row) => row.Location_Name === theaterSelected)
    return (
        <div>
            <TableContainer component={Paper} sx={{background: "#2196f3"}}>
                <Table sx={{ minWidth: 400}} size="small" aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Aspect Ratio</StyledTableCell>
                            <StyledTableCell align="center">Digital Projection</StyledTableCell>
                            <StyledTableCell align="center">Maximum Aspect Ratio (Digital)</StyledTableCell>
                            <StyledTableCell align="center">Film Projection</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {selectedTheater.map((row) => (
                        <StyledTableRow
                            hover
                            key={row.Location_Name}
                        >
                            <StyledTableCell align="center" component="th" scope="row">
                                {row.Aspect_Ratio}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.Digital_Projector}</StyledTableCell>
                            <StyledTableCell align="center">{row.Maximum_AR_Digital}</StyledTableCell>
                            <StyledTableCell align="center">{row.Film_Projector}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )


}

export default TableofProjDetails;
