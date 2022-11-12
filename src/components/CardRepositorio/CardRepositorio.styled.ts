import styled from "styled-components";

export const CardContainer = styled.section`

    .cards{
        width: 250px;
        height: 250px ;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #33364E;
        padding: 19px 14px;
        border-radius: 10px;
        color: white;
        .icone{
            font-size: 2rem;
            width: 250px;
            display: flex;
            justify-content: space-between;

            .linkRepo{
                text-decoration: none;
                color: white;

                &:hover{
                    font-size: 2.3rem;
                    transition: .3s;
                }
            }
        }

        .infoRepo{
            max-width: 200px;
            display: flex;
            flex-direction: column;
            word-wrap: break-word;
            text-align: center;
        }
    }
`