import React from "react";
import { withRouter } from "react-router-dom";
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    TitleContainer,
    SubtitleContainer
} from './menu-item.styles.jsx';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer 
    size={size}
    onClick={() => {history.push(`${match.url}${linkUrl}`)}}>
        <BackgroundImageContainer
        imageUrl={imageUrl}
        />
    
        <ContentContainer>
            <TitleContainer>{ title.toUpperCase() }</TitleContainer>
            <SubtitleContainer>SHOP NOW</SubtitleContainer>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);
