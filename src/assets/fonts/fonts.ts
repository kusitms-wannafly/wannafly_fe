import { createGlobalStyle } from 'styled-components';
import PretendardLight from './Pretendard-Light.woff2';
import PretendardMedium from './Pretendard-Medium.woff2';
import PretendardBold from './Pretendard-Bold.woff2';
import PretendardSemiBold from './Pretendard-SemiBold.woff2';
import PretendardLight from './Pretendard-Light.woff2';
import HappinessSansBold from './Happiness-Sans-Bold.woff2';

export default createGlobalStyle`
@font-face {
    font-family: "PretendardLight";
    src: local("PretendardLight"), 
    url(${PretendardLight}) format('woff2');
    font-style: normal;
}
@font-face {
    font-family: "PretendardMedium";
    src: local("PretendardMedium"), 
    url(${PretendardMedium}) format('woff2');
    font-style: normal;
}
@font-face {
    font-family: "PretendardBold";
    src: local("PretendardBold"), 
    url(${PretendardBold}) format('woff2');
    font-style: normal;
}
@font-face {
    font-family: "PretendardSemiBold";
    src: local("PretendardSemiBold"), 
    url(${PretendardSemiBold}) format('woff2');
    font-style: normal;
}
@font-face {
    font-family: "HappinessSansBold";
    src: local("HappinessSansBold"), 
    url(${HappinessSansBold}) format('woff2');
    font-style: normal;
}

`;
