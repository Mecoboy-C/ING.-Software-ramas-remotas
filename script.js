  // Datos de las recetas
   const recipes = {
            tamales: {
                title: "Tamales Colorados",
                image: "img/tamales.png",
                description: "Masa de maíz con recado rojo y carne, envueltos en hoja de plátano. Tradicionales en festividades guatemaltecas.",
                ingredients: [
                    "2 lbs de masa de maíz",
                    "1 lb de carne de cerdo o pollo cocida y desmenuzada",
                    "4 tomates maduros",
                    "2 chiles pimientos rojos",
                    "1 cebolla grande",
                    "2 dientes de ajo",
                    "1/4 taza de ajonjolí",
                    "1/4 taza de almendras o pepitoria",
                    "2 cucharadas de manteca de cerdo",
                    "Hojas de plátano limpias y cortadas en rectángulos",
                    "1 taza de caldo de la carne",
                    "Sal al gusto",
                    "Pimienta al gusto"
                ],
                instructions: [
                    "Preparar el recado: licuar los tomates, chiles pimientos, cebolla, ajo, ajonjolí y almendras con un poco de caldo.",
                    "En una sartén, calentar la manteca y verter el recado licuado. Cocinar por 10-15 minutos hasta espesar.",
                    "Dividir el recado en dos partes: una para mezclar con la masa y otra para la carne.",
                    "Mezclar la masa de maíz con una parte del recado, manteca adicional y suficiente caldo para obtener una consistencia suave.",
                    "Mezclar la carne desmenuzada con la otra parte del recado.",
                    "Sobre una hoja de plátano, extender una capa de masa, colocar una porción de carne en el centro y envolver formando un paquete rectangular.",
                    "Amarar los tamales con tiras de hoja de plátano o hilo de algodón.",
                    "Colocar los tamales en una vaporera y cocinar al vapor durante 1 hora a 1 hora y media.",
                    "Dejar reposar 10 minutos antes de servir."
                ],
                tips: "Para un mejor sabor, las hojas de plátano se deben pasar brevemente por el fuego o agua caliente para que sean más flexibles. Los tamales se pueden congelar y recalentar al vapor cuando se deseen consumir."
            },

            mole: {
                title: "Mole de Plátano",
                image: "img/platamole.png",
                description: "Plátanos fritos bañados en una salsa espesa de chocolate y especias. Se decora con ajonjolí y se sirve como postre.",
                ingredients: [
                    "6 plátanos maduros",
                    "2 tabletas de chocolate de mesa",
                    "2 tomates medianos",
                    "1/4 cebolla",
                    "2 dientes de ajo",
                    "2 chiles guaque secos",
                    "1 chile pasa seco",
                    "1/4 taza de ajonjolí",
                    "1/4 taza de almendras",
                    "1 raja de canela",
                    "2 clavos de olor",
                    "1 cucharadita de comino",
                    "1 cucharada de azúcar",
                    "2 tazas de agua o caldo de pollo",
                    "Aceite para freír",
                    "Sal al gusto"
                ],
                instructions: [
                    "Pelar los plátanos y cortarlos en rodajas gruesas o en mitades longitudinalmente.",
                    "Freír los plátanos en aceite caliente hasta que estén dorados. Reservar.",
                    "En un comal, tostar los chiles, ajonjolí, almendras, canela y clavos hasta que estén fragantes.",
                    "Asar los tomates, cebolla y ajo hasta que estén cocidos.",
                    "Licuar todos los ingredientes tostados y asados con el chocolate, comino y agua.",
                    "Colar la salsa y verterla en una olla. Cocinar a fuego medio durante 15-20 minutos hasta que espese.",
                    "Agregar el azúcar y sal al gusto.",
                    "Colocar los plátanos fritos en una fuente y bañar con la salsa de mole caliente.",
                    "Decorar con ajonjolí tostado y servir inmediatamente."
                ],
                tips: "Para un mole más espeso, puedes añadir una galleta maría o pan tostado al licuar. Si prefieres un sabor más dulce, aumenta la cantidad de azúcar al gusto. Este platillo es perfecto para acompañar con una bola de helado de vainilla."
            },

            caldo: {
                title: "Caldo de Gallina",
                image: "img/caldodegallina.png",
                description: "Caldo nutritivo de gallina criolla con verduras. Tradicionalmente se sirve con hierbabuena y limón, ideal para días fríos o como reconstituyente.",
                ingredients: [
                    "1 gallina criolla cortada en piezas",
                    "2 litros de agua",
                    "4 zanahorias peladas y cortadas en rodajas",
                    "3 papas peladas y cortadas en cubos",
                    "2 elotes cortados en trozos",
                    "1 cebolla grande picada",
                    "3 dientes de ajo machacados",
                    "1 rama de apio picado",
                    "1 manojo de hierbabuena",
                    "1 chile pimiento (opcional)",
                    "2 tomates picados",
                    "Jugo de 2 limones",
                    "Sal al gusto",
                    "Pimienta al gusto",
                    "Arroz blanco para acompañar"
                ],
                instructions: [
                    "En una olla grande, colocar la gallina con el agua y llevar a ebullición.",
                    "Espumar la superficie para retirar las impurezas que suban.",
                    "Agregar la cebolla, ajo, apio y sal. Cocinar a fuego medio-bajo por 1 hora o hasta que la gallina esté tierna.",
                    "Añadir las zanahorias, papas, elotes y tomates. Cocinar por 20-25 minutos más hasta que las verduras estén tiernas.",
                    "Incorporar la hierbabuena y el chile pimiento (si se usa) los últimos 5 minutos de cocción.",
                    "Rectificar la sal y pimienta al gusto.",
                    "Servir caliente en plato hondo, agregando jugo de limón al gusto.",
                    "Acompañar con arroz blanco y tortillas calientes."
                ],
                tips: "Para un caldo más sabroso, se recomienda usar gallina criolla en lugar de pollo regular. El caldo sabe aún mejor si se prepara con un día de anticipación. Se puede agregar güisquil o ejotes para variar las verduras."
            },

            
        };

        // Filtrado de recetas por categoría
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const recipeCards = document.querySelectorAll('.recipe-card');
            const modal = document.getElementById('recipeModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('modalBody');
            const closeModal = document.querySelector('.close-modal');
            
            // Filtrado
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    recipeCards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
            
            // Mostrar receta en modal
            const recipeButtons = document.querySelectorAll('.recipe-button');
            
            recipeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const recipeId = this.getAttribute('data-recipe');
                    const recipe = recipes[recipeId];
                    
                    if (recipe) {
                        modalTitle.textContent = recipe.title;
                        
                        modalBody.innerHTML = `
                            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image-large">
                            <p class="recipe-description">${recipe.description}</p>
                            
                            <div class="recipe-info">
                                <div class="ingredients">
                                    <h3>Ingredientes</h3>
                                    <ul>
                                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                                    </ul>
                                </div>
                                
                                <div class="instructions">
                                    <h3>Preparación</h3>
                                    <ol>
                                        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                                    </ol>
                                </div>
                            </div>
                            
                            <div class="recipe-tips">
                                <h3>Consejos</h3>
                                <p>${recipe.tips}</p>
                            </div>
                        `;
                        
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                    }
                });
            });
            
            // Cerrar modal
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            // Cerrar modal al hacer clic fuera del contenido
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });
