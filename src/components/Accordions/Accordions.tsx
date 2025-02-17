import React from 'react'
import styles from './Accordions.module.scss'
import ContainerComponent from '../containers/container-component'
// import Cta from '../cta/cta'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    resetNextUuid
} from 'react-accessible-accordion'

interface simpleInt {
    title: string;
    description: string,
}


export interface AccordionsProps {
    title: string;
    accordionDescription: string;
    itemsCollection: Array<simpleInt>;
    // link: string;
}

const document = {
    nodeType: 'document',
    content: [
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'Hello',
            marks: [{ type: 'bold' }],
          },
          {
            nodeType: 'text',
            value: ' world!',
            marks: [{ type: 'italic' }],
          },
        ],
      },
    ],
  };

const Accordions = ContainerComponent((props: AccordionsProps) => {
    resetNextUuid()
    return (
        <div className={styles['text-area']}>

            {props.title &&
                <div className={styles['f--section-title']}>
                    <h2>{props.title}</h2>
                </div>
            }

            {props.accordionDescription &&
                <div className={['f--description']}>
                    <p>{props.accordionDescription}</p>
                </div>
            }

            {props.itemsCollection && (
                <Accordion className={styles['accordion-container']} allowZeroExpanded allowMultipleExpanded>
                        {props.itemsCollection.filter(i => i).map((item, index) => {
                            return (
                                <AccordionItem key={index}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {item.title}
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 15 8.8" enableBackground="new 0 0 15 8.8" width="15" height="9">
                                            <polygon fill="#000000" fillRule="evenodd" clipRule="evenodd" points="7.5,6.2 13.7,0 15,1.3 7.5,8.8 0,1.3 1.3,0 "/>
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className={'accordion-content'}>
                                            <p>{item.description}</p>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })}
                </Accordion>
            )}

            {/* <div className={styles['cta-container']}>
                <Cta {...link}/>
            </div>  */}
        </div>
    )
}, {
    WrapperTag: 'div',
    wrapperClass: 'accordions',
    styles,
})


export default Accordions
