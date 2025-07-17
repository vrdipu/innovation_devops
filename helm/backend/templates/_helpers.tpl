{{- define "backend.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{- define "backend.fullname" -}}
{{- printf "%s" .Chart.Name -}}
{{- end -}}
