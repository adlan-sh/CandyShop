import axios from "axios";

type Item = {
    id: number;
}

//поставить реакт куери
async function addToCartRequest(ItemId: number) {
    const {} = await axios.post("/api/cart", { id: ItemId })
}

