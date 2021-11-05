import { useState, useCallback } from "react";

function useInputs(initialForm){
    const [form, setForm] = useState(initialForm);
    // useState 훅의 set함수는 비동기라 실행 한 후 state값을 조회할 때 최신 state값의 반환을 보장하지 않는다.
    /*
    그렇기 때문에 이전 상태값이 업데이트될 상태값에 영향을 미치는 경우에
    setState함수는 prevState를 인자로 받는 콜백을 받아 처리하는것을 권장
    */
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ( { ...form, [name]: value}));
    }, []);
    
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
}

export default useInputs;
