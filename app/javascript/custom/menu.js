// add togul_listener
// console.log();

function addToggleListener(selected_id, menu_id, toggle_class)
{
	const selected_element = document.querySelector(`#${selected_id}`);
	if (selected_element)
	{
		selected_element.addEventListener("click", function(event)
		{
			event.preventDefault();
			const menu = document.querySelector(`#${menu_id}`);
			if (menu)
			{
				menu.classList.toggle(toggle_class);
			}
			else
				console.error(`Error: ${menu_id} is not found.`);
		});
	}
	else
		console.error(`Error: ${selected_id} is not found.`);
}

document.addEventListener("turbo:load", function()
{
	addToggleListener("hamburger", "navbar-menu", "collapse");
	addToggleListener("account", "dropdown-menu", "active");
});

// document.addEventListener("turbo:load", function()
// {
// 	const hamburger = document.querySelector("#hamburger");
// 	if (hamburger)
// 	{
// 		hamburger.addEventListener("click", function(event)
// 		{
// 			event.preventDefault();
// 			const menu = document.querySelector("#navber-menu");
// 			if (menu)
// 				menu.classList.toggle("collapse");
// 			else
// 				console.error("error: #nevbar-menu is not found.");	
// 		});
// 	}

// 	const account = document.querySelector("#account");
// 	if (account)
// 	{
// 		account.addEventListener("click", function(event)
// 		{
// 			event.preventDefault();
// 			const menu = document.querySelector("#dropdown-menu");
// 			if (menu)
// 				menu.classList.toggle("active");
// 			else
// 				console.error("error: #dropdown-menu is not found.");
// 		});
// 	}
// });
