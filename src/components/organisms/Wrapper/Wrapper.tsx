import "./Wrapper.css";

export const Wrapper = ({children, isHeader}: any) => {
    return (
        <div className={`wrapper ${isHeader && "header"}`}>
            {children}
        </div>
    )
}
