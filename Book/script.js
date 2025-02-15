document.getElementById("bookForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    if (title && author) {
        const readingList = document.getElementById("readingList");

        // Create list item
        const li = document.createElement("li");
        li.textContent = `${title} by ${author}`;

        // Create order and delete buttons
        const orderBtn = document.createElement("button");
        orderBtn.textContent = "🛒 Order";
        orderBtn.classList.add("order");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete");

        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.classList.add("cart-add");

        // Append buttons to list item
        li.appendChild(orderBtn);
        li.appendChild(deleteBtn);
        li.appendChild(addToCartBtn);
        readingList.appendChild(li);

        // Clear input fields
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";

        // Move to ordered list on order button click
        orderBtn.addEventListener("click", function() {
            const orderedList = document.getElementById("orderedList");
            orderedList.appendChild(li);
            orderBtn.remove(); // Remove order button after ordering
        });

        // Delete book from list
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        // Add book to cart
        addToCartBtn.addEventListener("click", function() {
            const cartList = document.getElementById("cartList");
            cartList.appendChild(li);
            addToCartBtn.remove(); // Remove 'Add to Cart' button after adding
        });
    }
});

// Suggested famous books with their prices
const suggestedBooks = [
    { title: "The Midnight Library", author: "Matt Haig", price: "$15.99" },
    { title: "Where the Crawdads Sing", author: "Delia Owens", price: "$18.99" },
    { title: "The Silent Patient", author: "Alex Michaelides", price: "$12.99" },
    { title: "Educated", author: "Tara Westover", price: "$13.50" }
];

const suggestionsList = document.getElementById("suggestions");

// Dynamically add suggested books to the list
suggestedBooks.forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author} - Price: ${book.price}`;
    suggestionsList.appendChild(li);
});

// Handle payment
document.getElementById("payBtn").addEventListener("click", function() {
    const cartList = document.getElementById("cartList");
    if (cartList.children.length === 0) {
        alert("Your cart is empty. Please add books to your cart before proceeding to payment.");
    } else {
        alert("Payment successful! Thank you for your purchase.");
        cartList.innerHTML = ''; // Empty the cart after payment
    }
});
