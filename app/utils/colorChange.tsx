'use client'

import React from "react";

type SkillItemProps = {
    skill: string;
    idx: number;
}

type HoverHandler = (uniqueClass: string, e: React.MouseEvent) => void;

const defaultColor = '#e5e7eb';
const bgColorsArr = ['#f57676', '#de935f', '#56f08f', '#59cbff', '#aa86fc', '#f472b6', '#fde047'];

const SkillItem: React.FC<SkillItemProps> = ({ skill, idx }) => {
    const uniqueClass = `skill-tag-${idx}`;

    const changeColors: HoverHandler = (uniqueClass, e) => {
        e.preventDefault();
        let i = Math.floor(Math.random() * bgColorsArr.length);
        const skillTagEle = document.querySelector(`.${uniqueClass}`) as HTMLElement;

        if (skillTagEle) {
            if (e.type === 'mouseover') {
                skillTagEle.style.transition = 'background-color 0.3s ease';
                skillTagEle.style.backgroundColor = bgColorsArr[i];
            } else if (e.type === 'mouseout') {
                skillTagEle.style.transition = 'background-color 0.3s ease';
                skillTagEle.style.backgroundColor = defaultColor;

            }
        }
    };

    return (
        <p
            className={`bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold ${uniqueClass}`}
            onMouseOver={(e) => changeColors(uniqueClass, e)}
            onMouseOut={(e) => changeColors(uniqueClass, e)}
        >
            {skill}
        </p>
    )
}


export default SkillItem;