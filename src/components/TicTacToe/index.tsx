import { FC, useCallback, useEffect, useState } from "react"

enum PLAYERS {
    P1 = 'X',
    P2 = '0' 
}

interface ITicTacToe{
    n?: number;
}

const getInitialState = (n: number) => Array.from({length: n}, () => Array(n).fill(null))

export const TicTacToe: FC<ITicTacToe> = ({n = 10}) =>{
    const [gridState, setGridState] = useState<(PLAYERS | null)[][]>(getInitialState(n))
    const [activePlayer, setActivePlayer] = useState<PLAYERS>(PLAYERS.P1);
    const [outcome, setOutcome] = useState<(PLAYERS|'draw'|null)>(null)
    
    
    const checkWinner = useCallback((gridState: (PLAYERS | null)[][]): (PLAYERS | 'draw' | null) => {
         // check if any rows as same value
            for(let i = 0; i < n; i++){
                const first = gridState[i][0];
                const hasCompleteRow = gridState[i].every((val) => {
                    return val === gridState[i][0] && val !== null
                })
                if(hasCompleteRow) return first;
                
            }

            // check if all columns are same
           for(let j = 0; j < n; j++){
                const top = gridState[0][j];
                if(top !== null && gridState.every((row) => row[j] === top)){
                    return top;
                }
           }

            // check for diagonal lefttop - rightbottom
            for(let i = 0; i < n; i++){
                const first = gridState[0][0]
                if(first !== null && gridState.every((row, i) =>  row[i] === first )){
                    return  first;
                }
            }    
            
            for(let i = 0; i < n; i++){
                const first = gridState[0][n];
                if(first !== null && gridState.every((row, i) =>  row[n - i - 1] === first )){
                    return first
                }
            }

            // check if all cell are filled
            if(gridState.every((row) => row.every(cell => cell !== null))){
                return 'draw'
            }

            return null;
    }, [gridState])

    const onCellClick = (i: number, j: number) => {
        if(outcome !== null) return;
        const newState = gridState.map((row, index) => {
                if(index !== i) return row;
                const newRow = [...row]
                newRow[j] = activePlayer;
                return newRow;
            })
        
            setGridState(newState)

        const result = checkWinner(newState)
        if(result !== null){
            setOutcome(result)
            return;
        }

        setActivePlayer((prev) => prev === PLAYERS.P1 ? PLAYERS.P2 : PLAYERS.P1)

    }

    const onReset = () => {
        setGridState(getInitialState(n));
        setActivePlayer(PLAYERS.P1)
        setOutcome(null)
    }

    return <div>
        {
            outcome && <div style={{display:'flex'}}>
                <p>{outcome === 'draw' ? 'Its Draw' : `${outcome} won the game`}</p>
                <button onClick={onReset}>Reset</button>
                </div>
        }
        {
            gridState.map((row, i) => {
                return <div style={{display: 'flex'}}>
                    {
                        row.map((cell, j) => {
                            return <div onClick={() => onCellClick(i, j)} style={{height:50, width: 50, border:'solid 1px', padding: 10}}>{cell}</div>
                        })
                    }
                </div>
            })
        }
    </div>
}