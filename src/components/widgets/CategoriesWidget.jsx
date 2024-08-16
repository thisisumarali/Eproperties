import React from 'react';
import CategoriesWidgetData from '../../../public/assets/jsonData/widgets/CategoriesWidgetData.json'
import Link from 'next/link';
import handlePreventClick from '../click/handlePreventClick';

const CategoriesWidget = () => {
    return (
        <>
            <div className="widget-categories-box">
                <div className="widget-catagories-title">
                    <h4>{CategoriesWidgetData.title}</h4>
                </div>
                <div className="widget-categories-menu">
                    <ul>
                        {CategoriesWidgetData.categoriesData.map(category =>
                            <li key={category.id}><Link href={{ javascript: void (0) }} onClick={handlePreventClick}>{category.title}<span><i className={category.icon}></i></span></Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CategoriesWidget;