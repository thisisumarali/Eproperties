import React from 'react';

const SingleFaqV1 = ({ faq }) => {
    const { accordionId, dataBsTarget, title, bodyTitle, bodyText, activeClass, collapsed } = faq

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={accordionId}>
                    <button className={`accordion-button ${collapsed}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${dataBsTarget}`} aria-expanded="true" aria-controls={dataBsTarget}>
                        {title}
                    </button>
                </h2>
                <div id={dataBsTarget} className={`accordion-collapse collapse ${activeClass}`} aria-labelledby={accordionId} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <h4>{bodyTitle}</h4>
                        <p>{bodyText}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFaqV1;