import React from "react";
import { AccordionSummary } from "../../components/Accordion/AccordionSummary";
import { ArrowDownToLine } from "lucide-react";
import { AccordionDetails } from "../../components/Accordion/AccordionDetails";
import { Accordion } from "../../components/Accordion/Accordion";

export default function AccordionComp() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDownToLine />}>
          Kakaka
        </AccordionSummary>
        <AccordionDetails>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDownToLine />}>
          Kakaka
        </AccordionSummary>
        <AccordionDetails>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDownToLine />}>
          Kakaka
        </AccordionSummary>
        <AccordionDetails>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
