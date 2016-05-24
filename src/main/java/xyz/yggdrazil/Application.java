package xyz.yggdrazil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.provisioning.InMemoryUserDetailsManagerConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import xyz.yggdrazil.security.CustomBasicAuthenticationEntryPoint;

import java.security.Principal;

@SpringBootApplication
@RestController
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @RequestMapping("/api/v1/user")
    public Principal user(Principal user) {
        return user;
    }

    @Configuration
    @Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
    protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {

        @Autowired
        private CustomBasicAuthenticationEntryPoint entrypoint;

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.httpBasic().authenticationEntryPoint(entrypoint)
                    .and().authorizeRequests()
                    .antMatchers("/api/**").hasRole("ADMIN")
                    .and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/")
                    .and().csrf().disable();
        }

        @Autowired
        public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {

            InMemoryUserDetailsManagerConfigurer<AuthenticationManagerBuilder> authenticationManagerBuilder = auth.inMemoryAuthentication();

            authenticationManagerBuilder
                    .withUser("login")
                    .password("password")
                    .roles("ADMIN");

        }

    }
}
