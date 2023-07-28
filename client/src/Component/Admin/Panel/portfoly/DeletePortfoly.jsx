import React, { useCallback, memo } from "react";
import { AiOutlineDelete } from "react-icons/ai";
function DeletePortfoly({ id, onSuccess }) {
  
  const deleteHandle = useCallback(async () => {
    await fetch(
      `${process.env.REACT_APP_HOST_URL}/admin/panel/portfoly/delete/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/Json" },
        body: JSON.stringify({ id: id }),
      }
    );
    onSuccess();
  }, [id, onSuccess]);

  return (
    <button onClick={deleteHandle}>
      <AiOutlineDelete />
    </button>
  );
}

export default memo(DeletePortfoly);
