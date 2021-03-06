import React from 'react';
import styled from 'styled-components';
import { config } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 60vh;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 60vw;
    min-width: 300px;
    background: white;
    padding: 5px 25px;
    border-radius: 25px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.3)
    `;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;  
    padding: 0px 20px;
`;

const IconContainer = styled.div`
    position: relative;
    margin: 10px;
    color: ${props => props.primaryColor || 'blue'}
`;

export default function TitleMenu({primaryColor}) {
    
    return (
        <Container>
            <TitleContainer>
                <Title>
                    <h1 style={{
                        color: primaryColor,
                        fontSize: '2em',
                        marginBottom: -5
                    }}>Simple Todos</h1>
                    <h4 style={{
                        padding: '0px 10px'
                    }}> Keep track of what you need to do for the day with this app</h4>
                </Title>
                <IconContainer primaryColor={primaryColor}>
                    <Spring
                        config={config.wobbly}
                        from={{ opacity: 0, top: 100 }}
                        to={{ opacity: 1, top: 50 }}>
                        {props => (<div style={{
                            ...props,
                            right: 0,
                            position: 'absolute'
                        }}>
                            <FontAwesomeIcon
                                size="4x"
                                icon={['fad', 'pencil']} />
                        </div>)}
                    </Spring>
                    <FontAwesomeIcon
                        size="10x"
                        icon={['fad', 'clipboard-list-check']}
                        style={{
                            zIndex: 1
                        }} />
                </IconContainer>
            </TitleContainer>
        </Container>
    )
}