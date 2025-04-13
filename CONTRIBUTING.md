# 🛠 Guía para Contribuir a [BitBot]

Como **maintainer**, agradezco tu interés en mejorar este proyecto. Sigue estas pautas para que tus contribuciones se integren sin problemas:

---

## 🚀 **Cómo Contribuir**

### 1. Haz Fork del Repositorio
1. Haz clic en **[Fork](https://github.com/tu-usuario/repo/fork)** (botón arriba a la derecha en GitHub).  
2. Clona **tu fork** (solo si trabajas localmente):  
   
   git clone https://github.com/tu-usuario/repo.git
   cd repo

2. Elige un Issue Existente

    Revisa los issues abiertos.

    Espera mi confirmación (@maintainer) antes de empezar a codificar.

3. Crea una Rama Descriptiva

git checkout -b tipo/descripcion-corta 

# Ejemplos:  
# fix/error-verificacion  
# feat/comando-nuevo

4. Envía tu Pull Request (PR)

1. Sincroniza con el repo principal (evita conflictos):

    git fetch upstream
    git merge upstream/main
   
2. Sube los cambios a tu fork:

   git push origin tu-rama
   

### 📌 **Ejemplo Práctico**  

**Situación**: Quieres solucionar el issue #15 ("El comando /verify no valida emails").  

1. **En tu PR**, incluye esto en la descripción:  
   
   Soluciona el problema de validación en `/verify`.  
   Closes #15 (esta etiqueta garantiza que una vez mergeados los cambios, el issue que abrimos previamente como tarea pendiente, se cierre automáticamente)

⚠️ Notas Clave
   
   Si un PR no resuelve completamente un issue, usa:
  Relacionado con #55 
  
   Qué hace:
     Solo vincula el PR al issue #55 sin cerrarlo.
    Usado cuando:
        El PR es parcial (resuelve solo una parte del issue).
        El issue requiere más trabajo (ej: otros PRs).
        Quieres discutir la solución antes de cerrar el issue.

Resultado: El issue #55 sigue abierto, pero GitHub muestra el PR vinculado.
   

💡 Ejemplo de PR Perfecto

[FEATURE]: Añade comando /poll  

- Implementa votaciones con reacciones ✅/❌.  
- Incluye tests unitarios.  

Closes #78  # Cierra el issue de la solicitud original.  
Relacionado con #45  # Referencia una discusión previa.  



    

   
