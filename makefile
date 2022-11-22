project_dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

.PHONY: init
init:
	@if [ -z "${project}" ]; then \
		echo "project is not set";\
		exit 1; \
	fi;
	@find "${project_dir}" -type f \
		| xargs grep --exclude makefile --exclude=**/node_modules/* -Fl "__PROJECT__" \
		| xargs -I{} sed -i .bak s/__PROJECT__/${project}/g {};
	@find "${project_dir}" -name '*.bak' -type f | xargs rm -rf;

.PHONY: sops-decrypt
sops-decrypt:
	@find "$(project_dir)" -name '*.enc.*' -exec bash -c 'f={}; "$(project_dir).wrappers/sopsw" -d $$f > $${f//enc/dec}' \;

.PHONY: sops-encrypt
sops-encrypt:
	@find "$(project_dir)" -name '*.dec.*' -exec bash -c 'f={}; "$(project_dir).wrappers/sopsw" -e $$f > $${f//dec/enc}' \;

.PHONY: validate-circleci
validate-circleci:
	@$(project_dir).wrappers/circleciw config validate .circleci/config.yml --org-slug github/w3w-internal --org-id c04cbde3-52c1-4d9b-8312-d897f4545b47
