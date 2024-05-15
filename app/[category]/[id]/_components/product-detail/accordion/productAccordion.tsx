import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";

const ProductAccordion = () => {
    return (
        <>
            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Spedizione
                </AccordionSummary>
                <AccordionDetails>
                    <strong>Spedizione standard</strong>
                    <br/>
                    Entro 3-5 giorni lavorativi - 0€ su articoli non in saldo, 0€ su prodotti in promozione
                    <br/>
                    <strong>Spedizione express</strong>
                    <br/>
                    Entro 1-3 giorni lavorativi - 19 €
                    <br/>
                    <strong>Reso gratuito</strong>
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Garanzia
                </AccordionSummary>
                <AccordionDetails>
                    L'acquisto sul sito ufficiale e presso le nostre boutique ti consente di avere una garanzia sui
                    prodotti della validità di 2 anni.
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default ProductAccordion;
