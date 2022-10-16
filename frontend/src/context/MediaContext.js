import React from 'react';

const INITIAL_MEDIA_TYPE = { isMobile: false, isDesktop: false };

export const MediaContext = React.createContext(INITIAL_MEDIA_TYPE);

export const MediaProvider = ({
    children,
    mediaType = INITIAL_MEDIA_TYPE,
}) => {
    return <MediaContext.Provider value={mediaType}>{children}</MediaContext.Provider>;
};
