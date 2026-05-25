# ManoLocal — Contenido Completo de Diapositivas
**Archivo para sustentación académica**
*Actualizado: Mayo 2026 — Sincronizado con la aplicación React de forma exacta*

---

## Diapositiva 01 — PORTADA
- **Proyecto:** ManoLocal
- **Slogan:** Conectando Oficios de Confianza
- **Materia:** Formulación, Evaluación y Análisis de Factibilidad de Proyectos
- **Institución:** Universidad Cooperativa de Colombia — Montería · Ingeniería de Sistemas
- **Integrantes:** Jhonatan Javier Barrera Plaza · Juan Sebastián Arguelles Monterrosa · Juan Luis De La Espriella Pereira
- **Docente:** Ing. Erika Patricia Causil Luna
- **Período:** Mayo 2026

---

## Diapositiva 02 — PLANTEAMIENTO DEL PROBLEMA
- **Contexto:** Montería, Córdoba — economía informal superior al 50% (DANE 2025).
- **Problemas identificados:**
  1. **Dependencia del Voz a Voz:** El 93.9% de los trabajadores informales depende de recomendaciones personales para conseguir o contratar servicios.
  2. **Baja Visibilidad:** Los trabajadores independientes de oficios varios no cuentan con un espacio digital estructurado para dar a conocer sus servicios públicamente.
  3. **Desconvicción o Desconfianza:** Ausencia de un medio confiable donde los clientes puedan verificar referencias, calificaciones o perfiles antes de la contratación.
  4. **Alta Informalidad:** Más de la mitad de la población activa en Montería genera sus ingresos del día a día, sin ninguna estructura de respaldo tecnológico.

---

## Diapositiva 03 — PREGUNTA PROBLEMÁTICA
- **Pregunta de investigación académica:**
  > "¿Cómo puede una plataforma digital mejorar la conexión entre trabajadores informales y clientes en Montería?"

---

## Diapositiva 04 — JUSTIFICACIÓN
- **Propósito principal:**
  "ManoLocal busca brindar una solución digital que permita mejorar la conexión entre trabajadores independientes y clientes en Montería, ofreciendo un espacio organizado para la visualización de servicios."
- **Vacío que llena:**
  Plataformas de empleo tradicionales como Computrabajo o Magneto están orientadas al empleo formal calificado. ManoLocal ofrece un espacio abierto sin costo de entrada para el trabajador independiente de oficios varios.
- **Impactos esperados:**
  - **Trabajador:** Mayor facilidad para dar a conocer sus servicios, acceso a clientes potenciales en su zona y la oportunidad de construir una reputación digital.
  - **Cliente:** Acceso ágil y organizado a prestadores de servicios de oficios varios de confianza.
  - **Social y Municipal:** Fomento de la formalización digital progresiva e inclusión tecnológica en Montería.

---

## Diapositiva 05 — OBJETIVOS

### Objetivo General
Desarrollar una plataforma digital que conecte a trabajadores independientes con clientes en Montería, mejorando la visibilidad, acceso y confianza en el sector informal.

### Objetivos Específicos
1. Identificar las necesidades de los trabajadores en relación con la promoción de sus servicios.
2. Diseñar una plataforma donde los trabajadores registren servicios, experiencia y datos de contacto.
3. Permitir a los clientes buscar, comparar y seleccionar prestadores de servicios de oficios varios de manera organizada.
4. Evaluar la viabilidad, aceptación y funcionamiento de la plataforma en el contexto local de Montería.

---

## Diapositiva 06 — ALCANCE DEL PROYECTO — Población Objetivo
- **Beneficiario 1 — Trabajadores Independientes:** Obtienen mayor visibilidad de sus servicios y una forma más sencilla de conectar con nuevos clientes en su entorno local (peluquería, plomería, electricidad, albañilería, manicura, jardinería).
- **Beneficiario 2 — Clientes / Usuarios:** Encuentran trabajadores de oficios varios de manera más rápida, organizada y confiable para solucionar necesidades del hogar, permitiendo acceder a perfiles detallados y sus datos de contacto directo.
- **Delimitación Geográfica:** Exclusivamente la zona urbana de la ciudad de Montería (Fase 1).

---

## Diapositiva 07 — ALCANCE DEL PROYECTO — Módulos del Sistema
- **M01 — Autenticación:** Registro, inicio de sesión y autenticación segura por JWT distinguiendo los roles de Cliente y Trabajador.
- **M02 — Gestión de Perfiles:** Panel personal para configurar datos de contacto, habilidades y descripción del servicio.
- **M03 — Publicación:** CRUD para que los trabajadores expongan y actualicen sus servicios ofrecidos.
- **M04 — Búsqueda y Filtrado:** Buscador en tiempo real con filtros avanzados por categorías de oficios.
- **M05 — Visualización:** Fichas profesionales detalladas donde se expone la información pública del trabajador.
- **M06 — Calificaciones:** Sistema de reseñas escritas que permite retroalimentar la experiencia y construir confianza.

---

## Diapositiva 08 — ESTUDIO DE MERCADO — Dashboard de Encuesta
- **Metodología:** Aplicación de encuesta estructurada a una muestra de 33 personas en Montería.
- **Resultados clave:**
  - Alta aceptación por parte de los encuestados para utilizar una herramienta digital de conexión de oficios.
  - El 93.9% de los trabajadores manifestaron conseguir clientes únicamente mediante recomendaciones informales ("voz a voz").
  - Confirmación de un mercado latente con gran receptividad hacia soluciones tecnológicas locales.
- **Formato:** Dashboard interactivo integrado mediante iframe que expone gráficamente las respuestas obtenidas.

---

## Diapositiva 09 — ESTUDIO TÉCNICO — Arquitectura General
- **Capa Cliente:** Aplicación web responsiva accesible desde cualquier dispositivo móvil o de escritorio.
- **Capa de Aplicación (Frontend):** Construido en Next.js / React con estilos fluidos en Tailwind CSS para una experiencia de usuario rápida y dinámica.
- **Capa de Servicios (Backend):** Servidor API REST desarrollado en Node.js + Express que maneja la lógica de negocio y seguridad.
- **Capa de Datos:** Almacenamiento persistente e infraestructura en la nube gestionada en Supabase / PostgreSQL.
- **Stack Tecnológico Visual:** Next.js/React, Node.js/Express, Supabase, PostgreSQL, Tailwind CSS, y Framer Motion con indicadores interactivos de estado.

---

## Diapositiva 10 — ESTUDIO TÉCNICO — Módulos del Sistema
- Mapeo lógico y estructural de cómo interactúan las partes esenciales del software:
  - Autenticación segura y control de acceso.
  - El núcleo funcional: Búsqueda ágil y visualización detallada del perfil del trabajador.
  - La reputación social: Registro de opiniones y calificaciones que cierran el ciclo de confianza.

---

## Diapositiva 11 — ESTUDIO TÉCNICO — Diagramas de Casos de Uso
- **Caso de Uso del Cliente:** Registrar cuenta, buscar trabajadores por categorías, ver detalles del perfil, enviar solicitud de servicio y registrar calificaciones.
- **Caso de Uso del Trabajador:** Registrar cuenta, crear/editar perfil, publicar servicios, gestionar datos de contacto y visualizar calificaciones recibidas.

---

## Diapositiva 12 — ESTUDIO TÉCNICO — Modelo Entidad-Relación
- Base de datos relacional normalizada implementada en Supabase / PostgreSQL:
  - **Usuarios:** Gestión de identidades, roles, credenciales cifradas y fecha de registro.
  - **Servicios:** Relaciona al trabajador con sus oficios, descripción y estado activo.
  - **Calificaciones:** Asocia la valoración numérica y comentarios del cliente con el trabajador evaluado, garantizando trazabilidad y transparencia.

---

## Diapositiva 13 — ESTUDIO TÉCNICO — Diagramas de Flujo
- **Flujo Operativo Cliente:** Inicio → Registro/Login → Búsqueda de Categoría → Selección de Perfil → Obtención de Datos de Contacto → Realización del Servicio → Calificación.
- **Flujo Operativo Trabajador:** Inicio → Creación de Perfil → Configuración de Datos y Servicios → Publicación Activa → Atención de Consultas → Recepción de Calificación por el Cliente.

---

## Diapositiva 14 — CRONOGRAMA
- **Período de Ejecución:** 03 de febrero de 2026 al 26 de mayo de 2026.
- **Total Horas:** 230 horas totales (145h de actividades presenciales y 85h de trabajo autónomo e imprevistos).
- **Desglose de Fases y Semanas:**
  1. *Fase de Análisis:* Semanas 1 a 3 (38h) - Análisis de requisitos, diseño de bases de datos.
  2. *Fase de Desarrollo Backend:* Semanas 4 y 5 (44h) - API REST, autenticación.
  3. *Fase de Desarrollo Frontend:* Semanas 6 y 7 (48h) - Maquetación y componentes React.
  4. *Fase de Integración y Pruebas:* Semanas 8 a 10 (46h) - Integración de API, pruebas funcionales.
  5. *Fase de Correcciones y Despliegue:* Semanas 11 y 12 (22h) - Ajustes finales, publicación en la nube.
  6. *Fase de Documentación y Cierre:* Semanas 13 a 16 (16h) - Documentación académica, preparación de defensa.
- *Nota adicional:* Incluye la fila especial de transición "(Semana no incluida)" del cronograma institucional.

---

## Diapositiva 15 — ESTUDIO FINANCIERO — Estimación del Proyecto y Costo por Hora
- **Estimación del Proyecto (Fases y Horas):**
  - Análisis y requisitos: 25 horas
  - Diseño UI/UX: 35 horas
  - Desarrollo frontend: 60 horas
  - Desarrollo backend: 55 horas
  - Pruebas funcionales: 35 horas
  - Implementación y despliegue: 20 horas
  - **Total: 230 horas**
- **Costo por Hora por Rol:**
  - Desarrollador Full Stack: $25.000 COP/h ($4.000.000 mensuales)
  - Diseñador UI/UX: $18.750 COP/h ($3.000.000 mensuales)
  - Tester / QA: $12.500 COP/h ($2.000.000 mensuales)
  - **Valor promedio por hora del equipo:** $18.750 COP/h (Referenciado de perfiles junior en Colombia).

---

## Diapositiva 16 — ESTUDIO FINANCIERO — Costo Total y Precio Final
- **Costo Total del Desarrollo:**
  - Mano de obra calificada (230h × $18.750/h): $4.312.500 COP
  - Hosting inicial (Vercel): $200.000 COP
  - Dominio web (.com): $80.000 COP
  - Herramientas y licencias: $300.000 COP
  - **Costo Total del Proyecto:** **$4.892.500 COP**
- **Precio Final del Proyecto:**
  - Margen de ganancia aplicado: 40% ($1.957.000 COP)
  - **Precio Final Comercial:** **$6.849.500 COP**

---

## Diapositiva 17 — ESTUDIO FINANCIERO — Ingresos, Egresos y Viabilidad
- **Ingresos Proyectados (Mensual):**
  - Suscripciones premium (100 trabajadores × $15.000 COP): $1.500.000 COP
  - Comisiones por servicios realizados: $800.000 COP
  - Publicidad de negocios locales: $700.000 COP
  - **Total Ingresos Mensuales:** **$3.000.000 COP**
- **Egresos Proyectados (Mensual):**
  - Costos Fijos Mensuales: $747.000 COP (Hosting, soporte, base de datos)
  - Costos Variables Mensuales: $453.000 COP (Servidor, publicidad digital)
  - **Total Egresos Mensuales:** **$1.200.000 COP**
- **Punto de Equilibrio:** 80 suscriptores premium activos ($1.200.000 COP de costos operativos cubiertos).
- **Viabilidad Económica:** El proyecto demuestra alta factibilidad con una utilidad neta mensual proyectada de **$1.800.000 COP**, apalancada en bajos costos operativos cloud y una alta receptividad en la ciudad de Montería.

---

## Diapositiva 18 — PRESENTACIÓN DEL PROTOTIPO
- **Acceso QR y Enlace de Producción:** [https://manolocal.vercel.app](https://manolocal.vercel.app)
- **Ciclo Operativo del Demo (4 Pasos Clave por Rol):**
  - **Flujo Cliente:**
    1. Crear Cuenta (Registro en el sistema)
    2. Búsqueda por Categoría (Electricista, Plomero, etc.)
    3. Visualización y Datos de Contacto (Acceso al perfil)
    4. Envío de Calificaciones (Valoración del servicio)
  - **Flujo Trabajador:**
    1. Crear Cuenta (Registro profesional)
    2. Configurar Perfil (Habilidades y datos)
    3. Publicar Servicios (Exposición pública)
    4. Recepción de Calificaciones (Reputación del oficio)

---

## Diapositiva 19 — ¡GRACIAS!
- Diapositiva de cierre y despedida.
- Espacio dedicado a la ronda de preguntas por parte de los jurados examinadores de la Universidad Cooperativa de Colombia.
- **Mensaje de Cierre:** "ManoLocal — Conectando Oficios de Confianza."
