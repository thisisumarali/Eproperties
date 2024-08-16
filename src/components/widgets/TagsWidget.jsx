import React from 'react';
import TagsWidgetData from '../../../public/assets/jsonData/widgets/TagsWidgetData.json'
import Link from 'next/link';
import handlePreventClick from '../click/handlePreventClick';

const TagsWidget = () => {
    return (
        <>
            <div className="widget-categories-box">
                <div className="widget-catagories-title">
                    <h4>{TagsWidgetData.title}</h4>
                </div>
                <div className="widget-tags">
                    {TagsWidgetData.tagsData.map(tag =>
                        <Link href={{ javascript: void (0) }} onClick={handlePreventClick} key={tag.id}>{tag.name}</Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default TagsWidget;