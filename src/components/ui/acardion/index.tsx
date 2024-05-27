import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontSize: 22 , paddingY: 1 , color :"#64748B" }}
        >
          Biznig afzaliklar
        </AccordionSummary>
        <AccordionDetails sx={{ fontSize: 18  }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur odit labore nam
          cumque iure, dicta esse nihil doloremque dolorem iste et magni illum
          suscipit ab repudiandae, nostrum vitae facere incidunt.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontSize: 22 , paddingY: 1 ,color :"#64748B"  }}
        >
          Biznig qadiryatlar
        </AccordionSummary>
        <AccordionDetails sx={{ fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur odit labore nam
          cumque iure, dicta esse nihil doloremque dolorem iste et magni illum
          suscipit ab repudiandae, nostrum vitae facere incidunt.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontSize: 22 , paddingY: 1 , color :"#64748B" }}
        >
          Biznig mahsulotlar
        </AccordionSummary>
        <AccordionDetails sx={{ fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur odit labore nam
          cumque iure, dicta esse nihil doloremque dolorem iste et magni illum
          suscipit ab repudiandae, nostrum vitae facere incidunt.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontSize: 22 , paddingY: 1 , color :"#64748B" }}
        >
          Yetkazib berish hizmatimiz
        </AccordionSummary>
        <AccordionDetails sx={{ fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur odit labore nam
          cumque iure, dicta esse nihil doloremque dolorem iste et magni illum
          suscipit ab repudiandae, nostrum vitae facere incidunt.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontSize: 22 , paddingY: 1 , color :"#64748B"  }}
        >
          Biznig xizmatlar
        </AccordionSummary>
        <AccordionDetails sx={{ fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur odit labore nam
          cumque iure, dicta esse nihil doloremque dolorem iste et magni illum
          suscipit ab repudiandae, nostrum vitae facere incidunt.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
