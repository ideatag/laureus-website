import AccordionFAQ from "./AccordionFAQ";
import "./AccordionFAQ.css";
import {faqData} from "./accordionFAQData";

const MappingAccordionFAQ=({})=>(

        <div>
            <h1 className="donations-faq-title">Häufige Fragen zur Spende</h1>
            {faqData.map((faqData,index)=>(
                <AccordionFAQ key={faqData.summary} faqData={faqData}
                index={index}
                />
            ))}
        </div>
    )


export default MappingAccordionFAQ;
