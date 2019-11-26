import styled from "styled-components";

const Colors = {
    PageHeaderBk: '#2d3040',
    SubheadingTxt: '#c0c1c6'
};

const PageHeader = styled.section`
  background-color: ${Colors.PageHeaderBk};
  padding-top: 3rem;
  padding-bottom: 2rem;
`
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    // width: 90%;
    align-items: center;
    text-align: center;
`
const StyledH1 = styled.h1`
    color: white;
    font-size: 2rem;
    font-family: Raleway, Helvetica, sans-serif;
    // font-weight: 700;
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin: 0px 0px 1px;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid gray;
    width: 90%;
`
const Subheading = styled.p`
    color: ${Colors.SubheadingTxt};
    font-size: .8rem;
    font-family: Raleway, Helvetica, sans-serif;
    font-weight: 200;
    letter-spacing: .1rem;
    line-height: 2;
`
const Social = styled.section`
    font-size: 1.25rem;
    width: 50%;
    display: flex;
    justify-content: space-evenly;

    a {
        text-decoration: none;
        color: silver;
    }

    a:hover {
        color: white;
    }
`

export { StyledH1, Subheading, Social, HeaderContainer, PageHeader };