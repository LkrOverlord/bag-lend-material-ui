"use client"
import type React from "react"
import { useRef } from "react"
import {
  Box,
  Button,
  Typography,
  Paper,
  LinearProgress,
  Chip,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  createTheme,
  ThemeProvider,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { Download, FiberManualRecord } from "@mui/icons-material"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

// Definición de tipos
type Skill = {
  name: string
  level: number
}

type Experience = {
  title: string
  date: string
  company: string
  points: string[]
}

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: { main: "#2563eb", light: "#93c5fd", dark: "#1d4ed8" },
    secondary: { main: "#64748b" },
    background: { default: "#f3f4f6" },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: { fontSize: "1.4rem" },
    h6: { fontSize: "1.2rem" },
  },
})

// Componentes estilizados
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  borderBottom: `2px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(2),
}))

const SidebarTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.common.white,
  borderBottom: `1px solid rgba(255, 255, 255, 0.2)`,
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(2),
}))

const BulletPoint = styled(FiberManualRecord)({
  fontSize: 8,
  color: theme.palette.primary.main,
})

// Constantes para dimensiones A4 en píxeles (a 96 DPI)
// A4 es 210mm x 297mm, que a 96 DPI es aproximadamente 794px x 1123px
const A4_WIDTH_PX = 794
const A4_HEIGHT_PX = 1123

const CVComponent: React.FC = () => {
  const cvRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    { name: "React", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 80 },
    { name: "QA Testing", level: 85 },
    { name: "Java", level: 40 },
  ]

  const technologies: string[] = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Material UI",
    "Ant Design",
    "Git",
    "Jest",
    "Java",
    "QA Testing",
    "Playwright",
  ]

  const experiences: Experience[] = [
    {
      title: "Desarrollador Frontend",
      date: "2023 - Actualidad",
      company: "InfinixSoft Argentina",
      points: [
        "Desarrollo de aplicaciones web con React, Next.js y TypeScript",
        "Implementación de interfaces con Ant Design y Material UI",
        "Colaboración en equipos ágiles para desarrollo de productos",
        "Optimización de rendimiento y experiencia de usuario",
      ],
    },
    {
      title: "QA Tester",
      date: "2020 - 2023",
      company: "InfinixSoft Argentina",
      points: [
        "Diseño y ejecución de casos de prueba para aplicaciones web",
        "Identificación y seguimiento de errores",
        "Colaboración con desarrolladores para mejorar la calidad",
      ],
    },
  ]

  const downloadPDF = async () => {
    if (!cvRef.current) return

    try {
      const loadingMessage = document.createElement("div")
      loadingMessage.innerText = "Generando PDF..."
      Object.assign(loadingMessage.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "10px 20px",
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "white",
        borderRadius: "5px",
        zIndex: "9999",
      })
      document.body.appendChild(loadingMessage)

      // Configuración mejorada para html2canvas
      const canvas = await html2canvas(cvRef.current, {
        scale: 2, // Mayor escala para mejor calidad
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        allowTaint: false,
        imageTimeout: 0, // Sin timeout para imágenes
        onclone: (clonedDoc) => {
          // Asegurarse de que las imágenes en el clon estén cargadas correctamente
          const avatarImg = clonedDoc.querySelector("img")
          if (avatarImg) {
            avatarImg.crossOrigin = "anonymous"
          }
        },
      })

      // Crear PDF con dimensiones A4 exactas
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      })

      // Dimensiones A4 en mm
      const pdfWidth = 210
      const pdfHeight = 297

      // Añadir la imagen al PDF manteniendo las proporciones exactas de A4
      pdf.addImage(canvas.toDataURL("image/png", 1.0), "PNG", 0, 0, pdfWidth, pdfHeight)

      pdf.save("CV-Desarrollador-Frontend.pdf")
      document.body.removeChild(loadingMessage)
    } catch (error) {
      console.error("Error al generar el PDF:", error)
      alert("Error al generar el PDF. Intente nuevamente.")
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={downloadPDF}
          sx={{ mb: 2, alignSelf: "flex-start" }}
        >
          Descargar PDF
        </Button>

        {/* Contenedor con dimensiones fijas de A4 */}
        <Paper
          ref={cvRef}
          elevation={3}
          sx={{
            width: `${A4_WIDTH_PX}px`,
            height: `${A4_HEIGHT_PX}px`,
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
            // Aseguramos que mantenga las proporciones exactas
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Sidebar */}
          <Box
            sx={{
              width: "30%",
              bgcolor: "primary.main",
              color: "white",
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              overflow: "auto",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: 130,
                  height: 130,
                  mx: "auto",
                  mb: 2,
                  borderRadius: "50%",
                  border: "2px solid white",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "primary.main", // Mismo color que el fondo
                }}
              >
                <Box
                  component="img"
                  src="/assets/fotoPerfilLaboral2.jpg"
                  sx={{
                    position: "absolute",
                    width: "111%", // Aumentamos más el tamaño para cubrir todo el círculo
                    height: "auto", // Mantenemos la proporción de la imagen
                    top: "-40%", // Ajustamos verticalmente para centrar la cara
                    left: "50%",
                    transform: "translateX(-45%)", // Centramos horizontalmente
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography variant="h5" fontWeight="bold">
                Willams Meneses
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "primary.light" }}>
                DESARROLLADOR FRONTEND
              </Typography>
            </Box>

            <Box>
              <SidebarTitle variant="h6">Contacto</SidebarTitle>
              <List dense disablePadding sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <ListItem sx={{ p: 0, flexDirection: "column", alignItems: "flex-start" }}>
                  <Typography variant="body2" fontWeight="bold">
                    Email:
                  </Typography>
                  <Link
                    href="mailto:menesestapia@gmail.com"
                    color="inherit"
                    sx={{ color: "primary.light", textDecoration: "underline" }}
                  >
                    menesestapia@gmail.com
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, flexDirection: "column", alignItems: "flex-start" }}>
                  <Typography variant="body2" fontWeight="bold">
                    Teléfono:
                  </Typography>
                  <Typography variant="body2">+54 11 63374739</Typography>
                </ListItem>
                <ListItem sx={{ p: 0, flexDirection: "column", alignItems: "flex-start" }}>
                  <Typography variant="body2" fontWeight="bold">
                    LinkedIn:
                  </Typography>
                  <Link
                    href="https://linkedin.com/in/willams-meneses-tapia"
                    sx={{
                      color: "primary.light",
                      wordBreak: "break-all",
                      textDecoration: "underline",
                    }}
                  >
                    linkedin.com/in/willams-meneses-tapia
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, flexDirection: "column", alignItems: "flex-start" }}>
                  <Typography variant="body2" fontWeight="bold">
                    GitHub:
                  </Typography>
                  <Link
                    href="https://github.com/LkrOverlord"
                    sx={{
                      color: "primary.light",
                      textDecoration: "underline",
                    }}
                  >
                    github.com/LkrOverlord
                  </Link>
                </ListItem>
              </List>
            </Box>

            <Box>
              <SidebarTitle variant="h6">Habilidades</SidebarTitle>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {skills.map((skill) => (
                  <Box key={skill.name}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                      <Typography variant="body2">{skill.name}</Typography>
                      <Typography variant="body2">{skill.level}%</Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        "& .MuiLinearProgress-bar": { backgroundColor: "white" },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            <Box>
              <SidebarTitle variant="h6">Idiomas</SidebarTitle>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                  <Typography variant="body2">Inglés</Typography>
                  <Typography variant="body2">Intermedio</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    "& .MuiLinearProgress-bar": { backgroundColor: "white" },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Contenido Principal */}
          <Box
            sx={{
              width: "70%",
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              overflow: "auto",
            }}
          >
            <Box>
              <SectionTitle variant="h5">Sobre mí</SectionTitle>
              <Typography variant="body1" color="text.secondary">
                Desarrollador Frontend con especialización en React y experiencia en QA Testing. Apasionado por crear
                interfaces de usuario atractivas y funcionales. Enfocado en escribir código limpio y mantenible, con
                habilidades para trabajar en equipo y adaptarme rápidamente a nuevas tecnologías.
              </Typography>
            </Box>

            <Box>
              <SectionTitle variant="h5">Experiencia</SectionTitle>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {experiences.map((exp) => (
                  <Box key={exp.title}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        mb: 1,
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {exp.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {exp.date}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" color="text.secondary" sx={{ fontStyle: "italic", mb: 1.5 }}>
                      {exp.company}
                    </Typography>
                    <List dense disablePadding sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {exp.points.map((point) => (
                        <ListItem
                          key={point}
                          disablePadding
                          sx={{
                            alignItems: "flex-center",
                            "& .MuiListItemIcon-root": {
                              minWidth: "24px",
                              paddingTop: "0px",
                            },
                          }}
                        >
                          <ListItemIcon>
                            <BulletPoint />
                          </ListItemIcon>
                          <ListItemText primary={point} primaryTypographyProps={{ variant: "body2" }} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <SectionTitle variant="h5">Formación</SectionTitle>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <Typography variant="h6" fontWeight="bold">
                  Técnico Universitario en Desarrollo Web
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2020 - 2024
                </Typography>
              </Box>
              <Typography variant="subtitle1" color="text.secondary" sx={{ fontStyle: "italic" }}>
                Universidad Nacional de La Matanza (Graduado en Diciembre 2024)
              </Typography>
            </Box>
            <Box>
              <SectionTitle variant="h5">Tecnologías</SectionTitle>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                {technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      bgcolor: "#dbeafe",
                      color: "#1e40af",
                      borderRadius: 1,
                      height: 32,
                      "& .MuiChip-label": { px: 1.5 },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}

export default CVComponent
