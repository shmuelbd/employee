import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from '@mui/material';
import { resetErrorMessage } from '../../../redux/slices/EmployeeSlice';
const Modal = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-content: flex-start;
flex-wrap: wrap;
width: 100%;
height: 100%;
z-index: 3;
background-color: #474747cf;
`;
const ModalBox = styled.div`
padding-top: 30px;
margin-top: 100px;
/* position: fixed; */
display: flex;
justify-content: center;
align-content: flex-start;
flex-wrap: wrap;
width: 400px;
height: 250px;
z-index: 3;
background-color: #ebebeb;
border-radius: 20px;
`;
const Alert = styled.div`
width: 100%;
height: 30px;
text-align: center;
`;
const P = styled.p`
width: 100%;
font-size: 2.1rem;
font-weight: 800;
text-align: center;
height: 10px;
`;
const SubText = styled.p`
font-size: 1.3rem;
font-weight: 800;
text-align: center;
height: 10px;
`;
const Massege = styled.p`
font-size: 1.3rem;
text-align: center;
margin-left: 10px;
margin-bottom: 35px;
`;
const ButtonDiv = styled.div`
width: 100%;
text-align: center;
`;
type Props = {}

const ModalEror = (props: Props) => {
    const Error = useAppSelector((state) => state.Employees.ErrorMessage)
    const dispatch = useAppDispatch()

    return (
        <>
            {
                Error != null ?
                    <Modal>
                        <ModalBox>
                            <Alert>{
                                Error === "succes" ? <CheckCircleOutlineIcon fontSize='large' color='success' /> :
                                    <ReportGmailerrorredIcon fontSize='large' color='error' />}
                            </Alert>

                            {Error === "succes" ?
                                <P>succes!</P>
                                : <P>Error!</P>}
                            <SubText>message: </SubText>
                            <Massege>{Error}</Massege>
                            <ButtonDiv>
                                <Button
                                    variant="outlined"
                                    color={Error === "succes" ? "success" : "error"}
                                    onClick={() => dispatch(resetErrorMessage())}

                                >
                                    Close
                                </Button>
                            </ButtonDiv>

                        </ModalBox>
                    </Modal>
                    : null
            }

        </>
    )
}

export default ModalEror