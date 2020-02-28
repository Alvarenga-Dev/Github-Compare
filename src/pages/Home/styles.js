
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.2em 0;
`;

export const Title = styled.h1`
    color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.4em;
    text-transform: uppercase;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    display: flex;
    padding: 1.2em;

    input {
        border: ${props => (props.borderError ? '2px solid #f00' : 'none')};
        border-radius: .2em;
        flex: 1;
        padding: 1.2em;
    }

    button {
        background: #63f5b8;
        border: none;
        border-radius: .2em;
        color: #fff;
        font-weight: bolder;
        margin-left: .5em;
        padding: 1.2em;
        transition: all .5s;

        &:hover{
            background: #52d89f;
        }
    }
`;
