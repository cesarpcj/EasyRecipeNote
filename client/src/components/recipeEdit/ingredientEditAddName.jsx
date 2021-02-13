import React,{useState} from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

export default function IngredientEditAddName(props) {
    const arr = ["Farinha de trigo", "Ovo", "Açúcar refinado", "Açúcar cristal", "Leite", "Óleo", "Fermento químico", "Fermento biológico", 
    "Cacau", "Chocolate 50%", "Água", "Bicarbonato de sódio", "Leite condensado", "Creme de leite", "Chocolate em barra", 
    "Chocolate ao leite", "Chocolate branco", "Chocolate amargo", "Chocolate meio amargo", "Chantilly", "Leite em pó", 
    "Farinha integral", "Essência de baunilha", "Mel", "Cenoura", "Maçã", "Canela em pó", "Especiarias", "Manteiga", "Banana", 
    "Creme de avelã", "Sal", "Vinagre", "Laranja", "Suco de laranja", "Açúcar confeiteiro", "Leite de coco", "Coco", 
    "Açúcar mascavo", "Gotas de chocolate", "Nozes", "Gema", "Clara", "Margarina", "Iogurte", "Doce de leite", "Aveia em flocos",
    "Melhorador", "Banha", "Amido de milho", "Glucose", "Rum", "Chocolate 32%", "Farinha de milho", "Azeite", "Morango",
    "Damasco", "Goiabada"];
    const [searchTerm, setSearchTerm] = useState("");
    const [matchedWords, setMatchedWords] = useState([]);

    const searchHandle = ({target:{value}}) =>{
        let newArr;
        
        if(value !== "") newArr = arr.filter(el => el.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(value.toLowerCase()))
        setSearchTerm(value);
        setMatchedWords(newArr);
    }

    const addName = (w) =>{
        props.setName(w);
        setSearchTerm("");
        setMatchedWords([]);
    }

    const removeName = () =>{
        props.setName("");
        
    }

    const doNothing =(e)=>{
        e.preventDefault();
    }
    //quando add nome some input e aparece o nome com x pra cancelar
    return (
        <div>
            {props.name !== "" ? 
                <div className="chosenName">
                     <p>{props.name} &nbsp;</p>
                     <CancelIcon onClick={removeName}/>
                </div> :
                <>  
                    <form onSubmit={doNothing}>
                        <input className="mediumInput" placeholder="search ingredient" value={searchTerm} type="text" onChange={(e)=> searchHandle(e)}/>
                    </form>
                    <div>
                        {matchedWords && matchedWords.map(word =>{
                            
                            return <p key={word} onClick={()=>addName(word)}>{word}</p>
                        })}
                    </div>
                </>
            }
           
            
        </div>
    )
}
