"use client"

import { useState, useCallback } from "react"
import { dashboardService } from "../services/api/dashboardService"

export const useDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    stats: {
      totalProducts: 0,
      lowStock: 0,
      damagedProducts: 0,
      todayTransfers: 0,
    },
    zones: [],
    stockAlerts: [],
    damagedProducts: [],
    recentActivity: [],
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const refreshData = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await dashboardService.getDashboardData()
      setDashboardData(data)
    } catch (err) {
      setError(err.message || "Error al cargar los datos del dashboard")
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    dashboardData,
    loading,
    error,
    refreshData,
  }
}
