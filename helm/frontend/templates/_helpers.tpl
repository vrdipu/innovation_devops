{{- define "frontend.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{- define "frontend.fullname" -}}
{{- printf "%s" .Chart.Name -}}
{{- end -}}
