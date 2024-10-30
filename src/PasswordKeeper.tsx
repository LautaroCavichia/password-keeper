import { useState } from "react"
import "./PasswordKeeper.css"

interface RecordProps {
    userName?:string;
    password?:string;
    website?:string;
    isUserNameHidden:boolean;
    isPasswordHidden:boolean;
}

const getLenghtString = (s:any) =>{
    let resultString = "";
    for(let i = 0; i < s.length; i++)
        resultString = resultString + "#";
    return resultString;
}

export const PasswordKeeper = () => {

    const[records, setRecords] = useState<RecordProps[]>([]);
    const[newRecord, setNewRecord] = useState<RecordProps>({
        userName:"",
        password:"",
        website:"",
        isUserNameHidden:true,
        isPasswordHidden:true
    });

    const addRecord = () => {

        setRecords([...records,newRecord]);
        //TODO empty the input placeholder
    }

    const deleteRecord = (index:number) => {

    }

    const toggleVisibility = (index:number, type:string) => {
        const updatedRecords = [...records];

        if (type === "userName")
            updatedRecords[index] = {...updatedRecords[index], isUserNameHidden:!updatedRecords[index].isUserNameHidden, isPasswordHidden:updatedRecords[index].isPasswordHidden};
        else if (type === "password")
                updatedRecords[index] = {...updatedRecords[index], isUserNameHidden:updatedRecords[index].isUserNameHidden, isPasswordHidden:!updatedRecords[index].isPasswordHidden};

        setRecords(updatedRecords);
    }

    return (
        <div className="password-keeper">
            <h1>Welcome to PASSWORD KEEPER</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault(); // Previene il refresh della pagina al submit
                    addRecord();
                }}
            >
                <div className="website-input">
                    <input
                        type="text"
                        placeholder="Website / App"
                        value={newRecord.website}
                        required
                        onChange={(e) => {
                            setNewRecord({ ...newRecord, website: e.target.value });
                        }}
                    />
                </div>
                
                <div className="username-input">
                    <input
                        type="text"
                        placeholder="Username"
                        value={newRecord.userName}
                        required
                        onChange={(e) => {
                            setNewRecord({ ...newRecord, userName: e.target.value });
                        }}
                    />
                </div>
                
                <div className="password-input">
                    <input
                        type="password"
                        placeholder="Password"
                        value={newRecord.password}
                        required
                        onChange={(e) => {
                            setNewRecord({ ...newRecord, password: e.target.value });
                        }}
                    />
                </div>
                
                <div className="add-button">
                    <button type="submit">
                        ADD
                    </button>
                </div>
            </form>
            <ul>
                {records.map((record, index)=>
                    <li key={index}>
                        <span className="text">{record.website}</span>
                        <ul>
                            <li>
                                <span>Username: </span>
                                <button onClick={()=>{
                                    toggleVisibility(index,"userName");
                                }}>{record.isUserNameHidden ? getLenghtString(record.userName) : record.userName}
                                </button>
                                
                            </li>
                            <li>
                                <span>Password: </span>
                                <button onClick={()=>{
                                    toggleVisibility(index,"password");
                                }}>{record.isPasswordHidden ? getLenghtString(record.password) : record.password}
                                </button>
                                
                            </li>
                        </ul>
                    </li>
                )}
            </ul>
        </div>

    )
}