import styled from 'styled-components';
import { palette } from 'styled-theme';

const footerHeight = 70;

function boxShadow(shadow = 'none') {
  return `
        -webkit-box-shadow: ${shadow};
        -moz-box-shadow: ${shadow};
        box-shadow: ${shadow};
    `;
}

const AppStyle = styled.div`
  height: 100%;

  .siteContainer {
    min-height: calc(100vh - ${footerHeight}px);
  }
`;

const HeaderStyle = styled.header`
  ${boxShadow('0px 0.5px 4px rgba(0, 0, 0, 0.12)')};
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 3;
  justify-content: center;
  display: flex;

  .logo {
  }

  .navbar {
    width: 100%;
    padding: 15px;
    display: flex;
  }
`;

const YaziFormuStyle = styled.div`
  width: 750px;
  margin: auto 0;
`;

const FooterStyle = styled.footer`
  .footer {
    justify-content: baseline;
    width: 100%;
    display: flex;
    height: ${footerHeight}px;
    background-color: aliceblue;
  }
`;

export { HeaderStyle, FooterStyle, YaziFormuStyle };
export default AppStyle;
