// Simulación de servicio de dashboard
export const dashboardService = {
  getDashboardData: async () => {
    // Simular delay de API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      stats: {
        totalProducts: 4850,
        lowStock: 23,
        damagedProducts: 8,
        todayTransfers: 156,
      },
      zones: [
        {
          id: "zona-a",
          nombre: "Zona A - Electrónicos",
          total: 1250,
          disponible: 980,
          ocupacion: 78,
          tipo: "ELECTRONICO",
          color: "#aad63e",
        },
        {
          id: "zona-b",
          nombre: "Zona B - Ropa",
          total: 2100,
          disponible: 1890,
          ocupacion: 90,
          tipo: "TEXTIL",
          color: "#ff6a00",
        },
        {
          id: "zona-c",
          nombre: "Zona C - Hogar",
          total: 850,
          disponible: 720,
          ocupacion: 85,
          tipo: "HOGAR",
          color: "#9333ea",
        },
        {
          id: "zona-d",
          nombre: "Zona D - Deportes",
          total: 650,
          disponible: 580,
          ocupacion: 89,
          tipo: "DEPORTIVO",
          color: "#3b82f6",
        },
      ],
      stockAlerts: [
        {
          id: 1,
          producto: "iPhone 15 Pro",
          stock: 5,
          minimo: 20,
          zona: "Zona A",
          criticidad: "alta",
        },
        {
          id: 2,
          producto: 'Samsung TV 55"',
          stock: 3,
          minimo: 15,
          zona: "Zona A",
          criticidad: "critica",
        },
        {
          id: 3,
          producto: "Zapatillas Nike",
          stock: 8,
          minimo: 25,
          zona: "Zona D",
          criticidad: "media",
        },
      ],
      damagedProducts: [
        {
          id: 1,
          nombre: "Laptop HP",
          clase: "CLASE_100",
          cantidad: 2,
          fecha: "2025-01-20",
          costo: 4399.98,
        },
        {
          id: 2,
          nombre: "Microondas LG",
          clase: "CLASE_0",
          cantidad: 1,
          fecha: "2025-01-19",
          costo: 299.99,
        },
      ],
      recentActivity: [
        {
          id: 1,
          tipo: "ingreso",
          descripcion: "Ingreso de 50 unidades de iPhone 15 Pro",
          usuario: "Angely Corahua",
          fecha: "2025-01-22 14:30",
          zona: "Zona A",
        },
        {
          id: 2,
          tipo: "transferencia",
          descripcion: "Transferencia a Jockey Plaza - 15 unidades",
          usuario: "Bruno Guerra",
          fecha: "2025-01-22 13:15",
          zona: "Zona B",
        },
        {
          id: 3,
          tipo: "dañado",
          descripcion: "Producto clasificado como Clase 100",
          usuario: "Ashlee Garcia",
          fecha: "2025-01-22 12:45",
          zona: "Zona A",
        },
        {
          id: 4,
          tipo: "consulta",
          descripcion: "Consulta de stock - Zona C",
          usuario: "Angely Corahua",
          fecha: "2025-01-22 11:20",
          zona: "Zona C",
        },
      ],
    }
  },
}
