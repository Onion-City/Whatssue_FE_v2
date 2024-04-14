import styled from "styled-components";

export const Wrapper = ({children}: any) => {
    return (
        <Register>
            {children}
        </Register>
    )
}

const Register = styled.div`
    height: calc(100vh - 5.5rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3rem;
`;