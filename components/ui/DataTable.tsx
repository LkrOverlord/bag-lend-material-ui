'use client';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Box,
  Chip
} from '@mui/material';
import { useState } from 'react';

interface Data {
  id: number;
  name: string;
  category: string;
  status: string;
  date: string;
}

function createData(
  id: number,
  name: string,
  category: string,
  status: string,
  date: string
): Data {
  return { id, name, category, status, date };
}

const rows = [
  createData(1, 'Proyecto Alpha', 'Desarrollo', 'Activo', '2025-03-01'),
  createData(2, 'Campaña Beta', 'Marketing', 'Pendiente', '2025-03-05'),
  createData(3, 'Soporte Gamma', 'Servicio', 'Completado', '2025-02-28'),
  createData(4, 'Análisis Delta', 'Investigación', 'Activo', '2025-03-10'),
  createData(5, 'Estrategia Epsilon', 'Planificación', 'Pendiente', '2025-03-15'),
  createData(6, 'Implementación Zeta', 'Desarrollo', 'Completado', '2025-02-20'),
  createData(7, 'Optimización Eta', 'Técnico', 'Activo', '2025-03-08'),
  createData(8, 'Revisión Theta', 'Control', 'Pendiente', '2025-03-12'),
];

export default function DataTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Activo':
        return 'success';
      case 'Pendiente':
        return 'warning';
      case 'Completado':
        return 'info';
      default:
        return 'default';
    }
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="tabla de datos">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Categoría</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Fecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>
                      <Chip 
                        label={row.status} 
                        color={getStatusColor(row.status) as "success" | "warning" | "info" | "default"}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
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
          labelRowsPerPage="Filas por página:"
          labelDisplayedRows={({ from, to, count }) => 
            `${from}–${to} de ${count !== -1 ? count : `más de ${to}`}`}
        />
      </Paper>
    </Box>
  );
}