# Guía del Portafolio de Crisutf

## Agregar un Nuevo Proyecto

Para agregar un nuevo proyecto a la sección "Proyectos" de tu portafolio, sigue estos pasos:

1.  Abre el archivo `src/components/ProjectList.jsx`.
2.  Busca el arreglo `projects` al principio del archivo.
3.  Agrega un nuevo objeto al arreglo con la siguiente estructura:

```javascript
{
    id: 4, // Asegúrate de que el ID sea único (incrementa el último número)
    name: 'Nombre del Proyecto',
    description: 'Breve descripción de lo que hace el proyecto.',
    url: 'https://github.com/tu-usuario/tu-proyecto', // Enlace al repositorio
    demoUrl: 'https://tu-demo.com', // (Opcional) Enlace a la demo
    tags: ['React', 'Node.js', 'Utilidad'], // Etiquetas tecnológicas
    warning: '¡Cuidado! Mensaje de advertencia.', // (Opcional) Para proyectos peligrosos
    note: 'Nota adicional importante.', // (Opcional) Notas extra
    icon: <NombreIcono size={24} />, // Icono de lucide-react (impórtalo arriba)
    color: '#hexcode' // Color distintivo para el icono
},
```

### Ejemplo Completo

Si quieres agregar un proyecto llamado "Mi App":

```javascript
{
    id: 5,
    name: 'Mi App',
    description: 'Una aplicación increíble para gestionar tareas.',
    url: 'https://github.com/crisutf/mi-app',
    tags: ['Productividad', 'App'],
    icon: <CheckCircle size={24} />, // Recuerda importar CheckCircle de 'lucide-react'
    color: '#3498db'
}
```

## Despliegue

Consulta el archivo `deployment_guide.md` para instrucciones sobre cómo publicar tu sitio en Netlify, GitHub Pages o Cloudflare Pages.
