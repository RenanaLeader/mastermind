
import Header from '../header/header/header'
import GuessButton from '../result/guessButton';
import ColorsChoose from '../colorsChoose/colorsChoose';
import OneAttemptLine from '../oneLine/oneAttemptLine/oneAttemptLine';
import ListAttempt from '../listAttempts/listAttempts/listAttempts';
import { Container, Box } from '@material-ui/core';
import ErrorMessage from '../errorMessage/errorMessage';
import ButtonExport from '../buttonExports/buttonExport';
function Game() {
    return (

        <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-between">
            <Container>
                <Header></Header>
                <br />
                <ListAttempt></ListAttempt>
                <OneAttemptLine />
                <br/>
                <ColorsChoose></ColorsChoose>
                <br/>
                <GuessButton></GuessButton>
                <ErrorMessage />
                <br/>
                <ButtonExport />
            </Container>
        </Box>
    );
}

export default Game;
