import styled from 'styled-components/native';

type Props = {
    isActive: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    align-items: center;
    background-color: ${({ isActive }) => isActive ? "#1F1E25" : "transparent"};
    border: 2px solid ${({ isActive }) => isActive ? "#fff" : "#1F1E25"};
    padding: 24px 10px;
    border-radius: 8px;
    margin-top: 20px;
    color: #25C5F0;
`;

export const Title = styled.Text`
    color: #FFF;
    font-weight: bold;
    margin: 7px 24px 0;
`;
