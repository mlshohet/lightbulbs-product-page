export const increaseQuantity = item => ({
	...item, quantity: item.quantity + 1
});

export const decreaseQuantity = item => ({
	...item, quantity: item.quantity - 1
});