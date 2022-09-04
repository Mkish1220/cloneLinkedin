import styled from "styled-components";

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="images/home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" 
                         fill="none" 
                         stroke="currentColor"
                         width="24px"
                         height="14px"
                          stroke-width="2" 
                          stroke-linecap="round" 
                          stroke-linejoin="round"
                           class="search-icon">
                            <circle cx="11" cy="11" r="8">
                                </circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65">
                                    </line>
                                    </svg>
                    </SearchIcon>
                </Search>
            </Content>
        </Container >
    );
};

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div``;

const SearchIcon = styled.div``;


export default Header;
