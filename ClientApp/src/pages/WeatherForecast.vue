<template>
  <q-page padding>
    <div class="text-h4">Weather Forecast</div>
    <q-btn label="Refresh" class="q-mt-md q-mb-md" color="primary" @click="getWeather"/>
    <q-table
      dense
      :data="weatherData"
      :columns="weatherColumns"
      :loading="loading"
    />
  </q-page>
</template>

<script>
import { date } from 'quasar'
export default {
  name: 'PageOne',
  data () {
    return {
      weatherData: [],
      loading: true,
      weatherColumns: [
        { name: 'date', label: 'Date', field: 'date', format: (val) => date.formatDate(val, 'dddd, YYYY/MM/DD'), align: 'center' },
        { name: 'temperatureC', label: 'Temp (C)', field: 'temperatureC', align: 'center' },
        { name: 'temperatureF', label: 'Temp (F)', field: 'temperatureF', align: 'center' },
        { name: 'summary', label: 'Summary', field: 'summary', align: 'center' }
      ]
    }
  },
  methods: {
    getWeather () {
      // emulate loading
      this.loading = true
      setTimeout(() => {
        this.$axios.get('/api/WeatherForecast').then(resp => {
          this.weatherData = resp.data
        }).catch(() => {
          this.$q.dialog({
            title: 'Error',
            message: 'Could not get data',
            persistent: true
          })
        }).finally(() => {
          this.loading = false
        })
      }, 3000)
    }
  },
  mounted () {
    this.getWeather()
  }
}
</script>
